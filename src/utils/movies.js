export function getURLTitle(name) {
  return name.toLowerCase().replace(/[.:?"'!]/g, "").replace(/\s/g, "-")
}