import Navbar from "./dashboard/Navbar";

export default function Home() {

  return (
    <div className="h-screen">
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Blog</a>
  </div>
      <Navbar />
</div>
    </div>
  );
}
