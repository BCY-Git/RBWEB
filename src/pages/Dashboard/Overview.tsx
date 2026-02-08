export default function Overview() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 mb-8">
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
          <div className="text-sm text-zinc-400 mb-2">Total Revenue</div>
          <div className="text-[1.75rem] font-bold">$1,250.00</div>
        </div>
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
          <div className="text-sm text-zinc-400 mb-2">New Customers</div>
          <div className="text-[1.75rem] font-bold">1,234</div>
        </div>
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
          <div className="text-sm text-zinc-400 mb-2">Active Accounts</div>
          <div className="text-[1.75rem] font-bold">45,678</div>
        </div>
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
          <div className="text-sm text-zinc-400 mb-2">Growth Rate</div>
          <div className="text-[1.75rem] font-bold">4.5%</div>
        </div>
      </div>

      <div className="h-[350px] bg-zinc-950 border border-zinc-800 rounded-lg mb-8 bg-[linear-gradient(#27272a_1px,transparent_1px),linear-gradient(90deg,#27272a_1px,transparent_1px)] bg-[length:20px_20px] bg-bottom" />

      <div className="border border-zinc-800 rounded-lg overflow-hidden">
        <div className="flex border-b border-zinc-800 bg-zinc-950">
          <div className="px-6 py-3 text-sm cursor-pointer border-r border-zinc-800 bg-zinc-800 text-white">Outline</div>
          <div className="px-6 py-3 text-sm text-zinc-400 cursor-pointer border-r border-zinc-800 hover:bg-zinc-800 hover:text-white">Past Performance</div>
          <div className="px-6 py-3 text-sm text-zinc-400 cursor-pointer border-r border-zinc-800 hover:bg-zinc-800 hover:text-white">Key Personnel</div>
          <div className="px-6 py-3 text-sm text-zinc-400 cursor-pointer border-r border-zinc-800 hover:bg-zinc-800 hover:text-white">Focus Documents</div>
        </div>
        <div>
          <div className="grid grid-cols-[2fr_1.5fr_1fr_1fr_1fr] px-6 py-4 border-b border-zinc-800 items-center text-sm text-zinc-300 hover:bg-zinc-900 last:border-b-0">
            <div>Cover page</div>
            <div>Cover page</div>
            <div>In Process</div>
            <div>18</div>
            <div>Eddie Lake</div>
          </div>
          <div className="grid grid-cols-[2fr_1.5fr_1fr_1fr_1fr] px-6 py-4 border-b border-zinc-800 items-center text-sm text-zinc-300 hover:bg-zinc-900 last:border-b-0">
            <div>Table of contents</div>
            <div>Table of contents</div>
            <div>Done</div>
            <div>29</div>
            <div>Eddie Lake</div>
          </div>
          <div className="grid grid-cols-[2fr_1.5fr_1fr_1fr_1fr] px-6 py-4 border-b border-zinc-800 items-center text-sm text-zinc-300 hover:bg-zinc-900 last:border-b-0">
            <div>Executive summary</div>
            <div>Narrative</div>
            <div>Done</div>
            <div>10</div>
            <div>Eddie Lake</div>
          </div>
        </div>
      </div>
    </div>
  )
}
