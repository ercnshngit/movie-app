# Film Sitesi Örnek

Link: [https://movie-app-dusky-nine.vercel.app/](https://movie-app-dusky-nine.vercel.app/)

![Example Image](./github-images/site.png)
![Responsive Image](./github-images/responsive.png)

```bash
$ git clone https://github.com/ercnshngit/movie-app.git
```

```bash
$ yarn && yarn run dev
```

```bash
http://localhost:5174/
```

## Fallback image component

```typescript
const [currentSrc, setCurrentSrc] = React.useState(src);

const handleError = () => {
  // On error, set the source to the fallback image
  setCurrentSrc(fallbackSrc);
};

return (
  <img
    src={currentSrc}
    className={cn("w-full h-full object-cover", className)}
    onError={handleError}
    ref={ref}
    {...props}
  />
);
```

# Mock Photos for Program Types

Photo by <a href="https://unsplash.com/@dagerotip?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">George Dagerotip</a> on <a href="https://unsplash.com/photos/a-television-sitting-on-top-of-a-table-in-a-room-nCtlTpTcw_c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@geoffreymoffett?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Geoffrey Moffett</a> on <a href="https://unsplash.com/photos/red-and-black-theater-chairs-TFRezw7pQwI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
