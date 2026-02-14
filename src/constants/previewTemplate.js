export const PREVIEW_TEMPLATE = ({ compiledCode, css }) => `
<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<style>${css}</style>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</head>
<body>
<div id="root"></div>

<script>
const showError = (msg) => {
  document.body.innerHTML =
    "<pre style='color:red;font-family:monospace'>" + msg + "</pre>";
};

try {
  ${compiledCode}

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(React.createElement(App));

} catch(e) {
  showError(e.message);
}
</script>
</body>
</html>
`;
