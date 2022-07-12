import Link from "next/link";
import { useRouter } from "next/router";
import { Loader } from "../../assets/svg/loader";
import { THEME } from "../../constants/THEME";

export default function Button({
  children,
  secondary,
  href,
  as,
  className,
  loading,
  handleClick,
  loaderColor,
  title,
  ...props
}) {
  const router = useRouter();
  const isExternal = href && href.startsWith("http" || "mailto");
  const ButtonContent = ({ onClickFn }) => (
    <button
      type="button"
      className={`f fc ck button ${className ? className : ""}${
        loading ? " loading-button" : ""
      }${secondary ? " secondary" : ""}`}
      onClick={!loading ? (onClickFn ? onClickFn : handleClick) : () => {}}
      {...props}
      title={title}
    >
      {children}
      <div
        className="button-loader"
        style={{ display: loading ? "block" : "none" }}
      >
        <Loader
          color={secondary ? loaderColor : "#fff"}
          size={loading ? 25 : 0}
        />
      </div>
    </button>
  );

  if (href) {
    if (isExternal) {
      return (
        <a href={href} {...props}>
          <ButtonContent />
        </a>
      );
    } else {
      return (
        <Link href={href}>
          <span>
            <ButtonContent
              onClickFn={() => router.push(href, "", { scroll: true })}
            />
          </span>
        </Link>
      );
    }
  } else {
    return <ButtonContent />;
  }
}
