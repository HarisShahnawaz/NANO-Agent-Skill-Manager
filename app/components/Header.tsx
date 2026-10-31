export default function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <a className="btn btn-ghost text-xl">daisyUI</a>
            <div className="flex-1"></div>
            <ul className="menu menu-horizontal p-0">
                <li>
                    <a href="/skills">Skills</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/register">Register</a>
                </li>
            </ul>
        </div>
    );
}
//header page using daisyui