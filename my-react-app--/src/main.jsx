import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const myelement=(
  <table>
<tr>
  <th>
    Name
  </th>
</tr>
<tr>
  <td>
    john
  </td>
</tr>
<tr>
  <td>
    elsa
  </td>
</tr>
  </table>
);
createRoot(document.getElementById('root')).render(
  myelement
)
