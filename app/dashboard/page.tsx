export default function Page() {
  const btnPrimary = "py-1 px-3 bg-sky-500 text-white hover:bg-sky-300 ease-in-out duration-150 rounded shadow ml-3";
  return (
    <div className="p-6">
      <h1>Dashboard Page</h1>
      <a href="/" className={btnPrimary}>Home</a>
      <a href="/" className={btnPrimary}>invoices</a>
    </div>
  )
}