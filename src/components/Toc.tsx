"use client";

import { useEffect, useRef } from "react";
import tocbot from "tocbot";

type TocProps = {
  /**
   * 目次の対象となるコンテンツのセレクタ
   * @default '.prose'
   */
  contentSelector?: string;
  /**
   * 目次に表示する見出しレベル
   * @default '2, 3, 4'
   */
  headingSelector?: string;
  /**
   * 目次を表示するコンテナのセレクタ
   * @default '#toc'
   */
  tocSelector?: string;
};

export default function Toc({
  contentSelector = ".prose",
  headingSelector = "h2, h3, h4",
  tocSelector = "#toc",
}: TocProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      tocbot.init({
        // 目次を表示するコンテナ
        tocSelector,
        // 目次の対象となるコンテンツ
        contentSelector,
        // 目次に含める見出し要素
        headingSelector,
        // 見出しの階層を示すためのHTML要素
        hasInnerContainers: true,
        // スクロール時のスムーズスクロール
        scrollSmooth: true,
        // 目次のリンククラス
        linkClass: "toc-link",
        // アクティブなリンククラス
        activeLinkClass: "is-active-link",
        // 目次のリストクラス
        listClass: "toc-list",
        // アクティブなリストアイテムクラス
        activeListItemClass: "is-active-li",
        // 階層を持つリストクラス
        listItemClass: "toc-list-item",
        // 最初の見出しレベルを1に固定
        orderedList: false,
        // スクロールオフセット
        scrollSmoothOffset: -70,
      });

      initialized.current = true;
    }

    return () => {
      if (initialized.current) {
        tocbot.destroy();
        initialized.current = false;
      }
    };
  }, [contentSelector, headingSelector, tocSelector]);

  return (
    <div className="toc-container sticky top-8">
      <h3 className="text-lg font-semibold mb-3">目次</h3>
      <div id="toc" className="toc"></div>
      <style jsx global>{`
        .toc-list {
          @apply list-none pl-0 space-y-2;
        }
        .toc-list-item {
          @apply pl-0;
        }
        .toc-list .toc-list {
          @apply pl-4 mt-2;
        }
        .toc-link {
          @apply text-gray-600 hover:text-gray-900 hover:underline text-sm block py-1;
        }
        .is-active-link {
          @apply text-blue-600 font-medium;
        }
      `}</style>
    </div>
  );
}
