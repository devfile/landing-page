const copyToClipboardFallback = (str: string): void => {
  const el = document.createElement('textarea'); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px'; // Move outside the screen to make it invisible
  document.body.append(el); // Append the <textarea> element to the HTML document
  const selection = document.getSelection();
  if (selection) {
    const selected =
      selection.rangeCount > 0 // Check if there is any content selected previously
        ? selection.getRangeAt(0) // Store selection if found
        : false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
    el.remove(); // Remove the <textarea> element
    if (selected) {
      // If a selection existed before copying
      selection.removeAllRanges(); // Unselect everything on the HTML document
      selection.addRange(selected); // Restore the original selection
    }
  }
};

const copyToClipboard = (str: string): void => {
  if (!navigator.clipboard) {
    copyToClipboardFallback(str);
    return;
  }

  navigator.clipboard.writeText(str).catch(() => {});
};

function handleCopyClick(evt: MouseEvent): void {
  // get the children of the parent element
  const { children } = (evt.target as HTMLElement).parentElement as HTMLElement;
  // grab the first element (we append the copy button on afterwards, so the first will be the code element)
  // destructure the innerText from the code block
  const { textContent } = children.item(0) as HTMLElement;

  // copy all of the code to the clipboard
  copyToClipboard(textContent ?? '');
}

export const copyCodeSnippet = (): void => {
  // get the list of all highlight code blocks
  const highlights = document.querySelectorAll('pre.highlight');
  // add the copy button to each code block
  highlights.forEach((div) => {
    // create the copy button
    const copy = document.createElement('button');
    copy.innerHTML = 'Copy';
    // add the event listener to each click
    copy.addEventListener('click', handleCopyClick);
    // append the copy button to each code block
    div.append(copy);
  });
};
