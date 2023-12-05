import React, { FC, ReactNode } from "react";
import "./Page.scss";
import { CircleNotch, PlusCircle } from "@phosphor-icons/react";
import SearchBox from "../searchBox/SearchBox";

interface IPageProps {
  title: string;
  className: string;
  add?: () => void;
  valueSearch?: string;
  onBlurSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  loading?: boolean;
}

export const Page: FC<IPageProps> = ({
  add,
  children,
  className,
  loading,
  title,
  valueSearch,
  onBlurSearch,
  onChangeSearch,
}) => {
  return (
    <section className={`Page ${className}`}>
      <div
        className={`Page__header ${!onChangeSearch && !onBlurSearch && !add ? "center" : ""}`}
      >
        {!onChangeSearch  && !add && <h2 className="Page__title">{title}</h2>}
        {(add || onChangeSearch) && (
          <div className="Page__header__left">
            <h2 className="Page__title">{title}</h2>
            {add && (
              <button className="Page__button" onClick={add}>
                <PlusCircle size={24} weight="light" /> Añadir
              </button>
            )}
          </div>
        )}
        {(onChangeSearch || onBlurSearch) && (
          <div className="Page__header__right">
            <SearchBox
              value={valueSearch}
              onChange={(key) => { if (onChangeSearch) onChangeSearch(key) }}
              onBlur={onBlurSearch}
            />
          </div>
        )}
      </div>
      <div className="Page__content">
        {loading && (
          <div className="Page__content">
            <CircleNotch size={32} className="loading-spinner">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="5s"
                from="0 0 0"
                to="360 0 0"
                repeatCount="indefinite"
              />
            </CircleNotch>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
