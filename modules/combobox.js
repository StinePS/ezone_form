import autocomplete from "autocompleter";

function initCombobox(inputElement, data) {
  const sortedData = data.map((value) => ({ label: value }));

  autocomplete({
    input: inputElement,
    fetch: function (text, update) {
      console.log("search", text);
      text = text.toLowerCase();
      let suggestions = sortedData.filter((n) => n.label.toLowerCase().startsWith(text));
      console.log(suggestions);
      update(suggestions);
    },
    onSelect: function (item) {
      console.log("select", item);
      inputElement.value = item.label;
    },
  });
}

export default initCombobox;
