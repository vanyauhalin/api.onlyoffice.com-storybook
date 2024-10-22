import {readdirSync} from "node:fs"
import path from "node:path"

export function listFontsSync(): string[] {
  const r: string[] = []
  const d = readdirSync(__dirname)
  for (const n of d) {
    const e = path.extname(n)
    if (e === ".woff" || e === ".woff2") {
      const f = path.join(__dirname, n)
      r.push(f)
    }
  }
  return r
}
