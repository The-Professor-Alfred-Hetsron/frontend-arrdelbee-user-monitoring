export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <div className="">
            {/* Put your Dashboard Common components here */}
            {children}
        </div>
    )
  }