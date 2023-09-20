import { ColorPalette } from '../types/ColorPalette';

chrome.storage.onChanged.addListener((changes, namespace) => {
  console.log(changes, namespace);
});

chrome.runtime.onMessage.addListener(function (request, sender) {
  console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');
  if (request.greeting == 'hello') {
    chrome.storage.local
      .get(['extend-chrome/storage__colorPaletteListBucket--colorPaletteList'])
      .then((value) => {
        console.log(value['extend-chrome/storage__colorPaletteListBucket--colorPaletteList']);
        const colors = value[
          'extend-chrome/storage__colorPaletteListBucket--colorPaletteList'
        ] as ColorPalette[];

        const body = document.querySelector('body');
        if (!body) return;
        const test = body.querySelectorAll<HTMLElement>('.NlL62b');
        test.forEach((element) => {
          const title = element.querySelector<HTMLElement>('span.FAxxKc');
          if (!title) return;
          const filters = colors.filter((value) => title.innerHTML.includes(value.tag));
          if (filters.length == 0) return;
          const color = filters[0].color;
          switch (color) {
            case 'red':
              element.style.background = '#FF0000';
              title.style.color = '#FFFFFF';
              break;
            case 'blue':
              element.style.background = '#0000FF';
              title.style.color = '#FFFFFF';
              break;
            case 'green':
              element.style.background = '#00FF00';
              title.style.color = '#FFFFFF';
              break;
            case 'stone':
              element.style.background = '#333333';
              title.style.color = '#FFFFFF';
              break;
          }
        });
      });
  }
});
