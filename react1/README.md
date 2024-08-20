# React + Vite

Error 1 of(" ")
[plugin:vite:react-babel] C:\Users\pandi\OneDrive\Desktop\GitHub\html\react1\src\main.jsx: Unterminated string constant. (1:27)

Error 2 of({})
[plugin:vite:react-babel] C:\Users\pandi\OneDrive\Desktop\GitHub\html\react1\src\main.jsx: Unexpected token, expected "," (2:21)
  5 |

Error 3 of (file name not found)
[plugin:vite:import-analysis] Failed to resolve import "./Apps.jsx" from "src/main.jsx". Does the file exist?

Error 4 of (unknown identifier)
[plugin:vite:react-babel] C:\Users\pandi\OneDrive\Desktop\GitHub\html\react1\src\main.jsx: Missing semicolon. (2:5)

Error 5 of (wrong path for package)
[plugin:vite:import-analysis] Missing "./clients" specifier in "react-dom" package

Error 6:
Unterminated JSX contents. - When the JSX is not properly closed

Error 7:
SyntaxError: The requested module '/src/XXXXX' does not provide an export **named** **'default'** (at XXXXX)

SyntaxError: The requested module '/src/App.jsx?t=1723791964221' does not provide an export **named** 'XXXXX'

Case 1:
1. Export default with any name and default import any name => No error
2. Export named with any name and named import any name => Error
3. In a file, only one default export is possible, same only one default import is possible
4. In a file, multiple named exports are possible, same multiple named imports are possible
5. named export two ways:
  a. export const XXXX = () => {}
  b. const XXXX = () => {}; export { XXXX }