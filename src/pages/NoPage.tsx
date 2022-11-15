
import { Link } from "react-router-dom"

import * as routes from '../routes/route'

export default function NoPage() {
  return (
    <section className="no page">
      <h3>404</h3>
      <p>
        PAGE NOT FOUND
      </p>
      <Link to={routes.home}>Go Home</Link>
    </section>
  )
}