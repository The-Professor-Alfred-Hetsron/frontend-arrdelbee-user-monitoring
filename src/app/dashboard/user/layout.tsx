export default function UserLayout({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <div className="">
            {/* Put your User Common components here */}
            {children}
        </div>
    )
  }