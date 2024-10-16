import Link from 'next/link'
export default function Header() {
  return (
    <div>
      <nav className='bg-green-600 text-white p-5 flex justify-between items-center '>
        <h1 className='text-4xl font-bold '>MOIN ACADEMY</h1>
        <ul className='flex justify-center gap-6 text-lg '>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className='flex gap-4'>
            <button className='bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-700 hover:text-white'>Student Login</button>
            <button className='bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-700 hover:text-white'>Admission Form</button>
        </div>
      </nav>
    </div>
  )
}
