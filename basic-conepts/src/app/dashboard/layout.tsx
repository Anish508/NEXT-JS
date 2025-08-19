import Link from "next/link"
export default function CommonAdminDashbaordLayout({ children }: { children: React.ReactNode }) {
      return (
            <div>
                  <div className="flex">
                        <aside className="w-64 p-4 border-r">
                              <h1>Dashboard</h1>
                              <nav>
                                    <ul>
                                          <li>
                                                <Link href={"/dashboard"}>Dashbaoard</Link>
                                          </li>
                                          <li>
                                                <Link href={"/dashboard/analytics"}>Dashbaoard Analytics</Link>
                                          </li>
                                    </ul>
                              </nav>
                        </aside>
                        <div className="flex p-5">{
                              children}
                        </div>
                  </div>
            </div>
      )
}