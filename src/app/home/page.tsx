export function HomeContainer({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div 
        className="flex gap-3 min-h-[656px] ml-auto"
        style={{width:'100%', maxWidth: 'calc(100vw - ((100vw - 1180px)/2))' }}
      >
        {children}
      </div>
    )
}

export function Product({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded p-1 cursor-pointer relative min-w-[540px] h-[480px]">
        {children}
      </div>
    )
}