import { Link } from "@/i18n/navigation";
import type { BreadcrumbProps } from "@/types/breadcrumb";

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-sans text-[11px] leading-4 text-eighth-text rtl:tracking-normal">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.title}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}

              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "text-secondary-background" : undefined}
                >
                  {item.title}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition hover:text-secondary-background"
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
