local citebib = require("citebib")

-- Format BibTeX by indenting field lines but preserving internal commas
local function pretty_format_bibtex(raw)
  local header = raw:match("^(@%w+%b{})")
  local body = raw:match("@%w+%b{}%s*,%s*(.*)}%s*$")

  if not header or not body then
    return raw -- fallback
  end

  local formatted_body = ""
  for line in body:gmatch("[^\n]+") do
    formatted_body = formatted_body .. "  " .. line .. "\n"
  end

  return header .. ",\n" .. formatted_body .. "}"
end

-- Escape special HTML characters
local function escape_html(str)
  return str
    :gsub("&", "&amp;")
    :gsub("<", "&lt;")
    :gsub(">", "&gt;")
end

return {
  ["pubextras"] = function(args, kwargs)
    local id = kwargs["id"] or "missing-id"
    local citekey = kwargs["citekey"]
    local entry = citebib.get_bibtex_entry(citekey or "") or {}
    local abstract = entry.abstract or "No abstract available."
    local bibtex = entry.raw or "@misc{" .. citekey .. ", note = {Entry not found}}" 

    local formatted_bibtex = escape_html(pretty_format_bibtex(bibtex))

    local html = string.format([[
<div id="abstract-%s" class="pubextras-section" style="margin-top: 1em;">
  <strong>Abstract:</strong>
  <p>%s</p>
</div>

<div id="bibtex-%s" class="pubextras-section" style="margin-top: 1em;">
  <strong>BibTeX:</strong>
  <div class="input-group mb-2">
    <button class="btn btn-outline-secondary btn-sm" onclick="navigator.clipboard.writeText(`%s`); return false;">Copy</button>
  </div>
  <pre><code class="language-bibtex">%s</code></pre>
</div>
    ]],
      id,
      escape_html(abstract),
      id,
      bibtex:gsub("`", "\\`"),  -- escape backticks for JS clipboard
      formatted_bibtex
    )

    return pandoc.RawBlock("html", html)
  end
}
