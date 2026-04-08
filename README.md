# timer-display

## タイム表示の左右位置調整

タイム表示はCSS変数 `--time-offset-x` で左右に動かせます。
サイズは `--time-font-size` で変更できます。

- 負の値: 左に移動
- 正の値: 右に移動

`style.css` の `:root` にある値を変更してください。

```css
:root {
  --time-offset-x: -24px;
  --time-font-size: 150px;
}
```

例:
- `-10px` → 少し左
- `-40px` → さらに左
- `0px` → 中央

### URLパラメータで一時的に調整

`offsetX` と `fontSize` を付けると、ページごとに位置とサイズを上書きできます。

例:

```text
index.html?id=012345&offsetX=-30&fontSize=170
```

この場合は `30px` 左に移動します。
サイズは `170px` になります。
