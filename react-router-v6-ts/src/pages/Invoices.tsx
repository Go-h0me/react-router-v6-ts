import { invoices } from "../data/invoices"
import { Link, Outlet } from "react-router-dom"

const Invoices = () => {
    return (
        <main>
            <h2>
                Invoices
            </h2>
            <Link to='new'>Create New Invoice</Link>
            <div style={{ display: 'flex' }}>
                <nav style={{ padding: '1rem', borderRight: '1px solid' }}>
                    {invoices.map(invoice => (
                        <Link to={invoice.id.toString()} key={invoice.id}
                            style={{ display: 'block', margin: '1rem' }}
                        >
                            {invoice.name}
                        </Link>
                    ))}

                </nav>
                <Outlet/>
            </div>
        </main>
    )
}

export default Invoices