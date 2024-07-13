import logo from "@assets/logo.svg";
export default function ApplicationLogo({
     black = true,
     className = "",
     ...props
}) {
     return (
          <img
               src={logo}
               className={(black ? "invert " : "") + className}
               {...props}
          />
     );
}
