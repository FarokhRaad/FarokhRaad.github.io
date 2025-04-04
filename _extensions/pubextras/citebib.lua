local M = {}
local bibtex_db = nil

-- Read the entire .bib file as string
local function load_bibtex()
  local bibfile = "publications.bib"
  local fh = io.open(bibfile, "r")
  if not fh then
    io.stderr:write("Could not open " .. bibfile .. "\n")
    return {}
  end
  local content = fh:read("*all")
  fh:close()

  local entries = {}

  -- Pattern for matching complete BibTeX entries
  for entry_type, key, body in content:gmatch("@(%w+)%s*{%s*(.-),%s*(.-)\n}%s*") do
    local fields = {}
    for field, value in body:gmatch("(%w+)%s*=%s*[{\"](.-)[}\"]%s*,?") do
      fields[field:lower()] = value
    end

    entries[key] = {
      key = key,
      type = entry_type,
      fields = fields,
      abstract = fields["abstract"] or nil,
      raw = string.format("@%s{%s,\n  %s\n}", entry_type, key, body)
    }
  end

  return entries
end

function M.get_bibtex_entry(key)
  if not bibtex_db then
    bibtex_db = load_bibtex()
  end
  return bibtex_db[key]
end

return M
