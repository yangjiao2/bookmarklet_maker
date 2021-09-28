// Dump from deltoid for markdown

'use strict';

// eslint-disable-next-line fb-www/complexity
const data = (() => {
  // const url = prompt('Please enter deltoid URL');
  let subtitle;
  let subSectionLabel;
  let url;
  function round(val) {
    const digits = Math.pow(10, 2);

    return Math.round(val * digits) / digits;
  }
  
  let share_button = document.querySelector('[aria-label="Share"]');
  share_button.click();
  const url = document.querySelector('._2phz').firstElementChild.innerText.split('\n')[1];
  
  
  let exp_info  = document.querySelector('[aria-label="experiment and query information"]');
  exp_info.click();
  
  if (url == null) {
    throw new Error('No url found');
  }

  const metadata = Array.from(
    document.querySelectorAll('._lkn')[1].querySelectorAll('tr'),
  ).map(e => e.innerText.split('\n'));

  const date = metadata.find(([key, _]) => key.match('Time Range'))[1];

  const metricInfo = metadata.find(([key, _]) =>
    key.match('MDF Metrics|MDF Tags'),
  );
  const metrics = metricInfo[1].split(', ');
  
  let collectionName;
  if (metrics.length > 1) {
    collectionName = `${metrics[0]} and ${metrics.length - 1} ${
      metrics.length === 2 ? 'other' : 'others'
    }`;
  } else {
    collectionName = metrics.join(', ');
  }

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.custom_label != null) {
    collectionName = urlParams.custom_label;
  }

  if (collectionName == null) {
    throw new Error('No collection found');
  }

  const filter = metadata.find(([key, _]) => key.match('Filters'));

  const rows =
    document.querySelector('[aria-label=grid]')?.querySelectorAll('._3by9') ??
    [];

  if (rows.length === 0) {
    throw new Error('No rows found');
  }

  if (rows.length === 0) {
    throw new Error('No rows found');
  }

  if (date == null || date === '') {
    throw new Error('No date found');
  }

  const subtitleEntryCount = new Map();
  let lastSubtitle = null;

  const outcomes = [].slice
    .call(rows)
    .map(e => {
      const diffAllElement = e.querySelector('._1c1_');
      const textComponents = e.innerText.split('\n');
      const isSubtitle = textComponents.length === 1;
      if (isSubtitle) {
        subtitle = e.querySelector('._345y').innerText.split(', ')[0];
        subSectionLabel = e.querySelector('._345y').innerText.split(', ')[1];

        subtitleEntryCount.set(subtitle, 0);
        lastSubtitle = subtitle;

        return {key: subtitle, label: `- ${subtitle}`, type: 'subtitle'};
      }
      const useSubtitle = e.querySelector('._3462._1iu_') != null;

      if (diffAllElement == null) {
        console.log('error on', e);

        return null;
      }

      const diffAll = diffAllElement.innerText
        .split(/\n|±/)
        .map(v => parseFloat(v));
      const value = diffAll[0];
      const plus = diffAll[1];
      const minus = Math.abs(diffAll[2] ?? diffAll[1]);

      const isNeutral =
        (value + plus >= 0 && value - minus <= 0) ||
        (value + plus <= 0 && value - minus >= 0);
      if (isNeutral && !window.showNeutral) {
        return null;
      }

      if (useSubtitle) {
        subtitleEntryCount.set(
          lastSubtitle,
          subtitleEntryCount.get(lastSubtitle) + 1,
        );
      }

      const string = useSubtitle ? [`  -`] : ['-'];

      const isPositiveOutcome = e.querySelector('._g50') != null;
      if (!isNeutral) {
        string.push(
          isPositiveOutcome
            ? String.fromCodePoint(0x1f7e9)
            : String.fromCodePoint(0x1f7e5),
        );
      }

      if (useSubtitle) {
        string.push(`${subSectionLabel}:`);
      }

      const label = e.querySelector('._345y').innerText;
      string.push(`${label}:`);
      const stringVal = value > 0 ? `+${round(value)}` : `${round(value)}`;
      string.push(isNeutral ? 'Neutral' : stringVal + '%');

      if (!isNeutral && window.showCI) {
        if (plus === minus) {
          string.push(`(±${round(plus)})`);
        } else {
          string.push(`(+${round(plus)}-${round(minus)})`);
        }
      }

      return {label: string.join(' ')};
    })
    .filter(val => {
      return (
        val != null &&
        (val?.key == null || subtitleEntryCount.get(val?.key) > 0)
      );
    });

  if (outcomes.length === 0) {
    outcomes.push({label: '- Neutral'});
  }

  if (filter != null) {
    outcomes.unshift({label: `_Filter: ${filter.slice(1).join(', ')}_`});
  }

  return [`## [${collectionName} (${date})](${url})`]
    .concat(outcomes.map(({label}) => label))
    .join('\n');
})();
console.log(data);
