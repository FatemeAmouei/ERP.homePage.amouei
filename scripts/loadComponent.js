export default async function loadComponent(path, containerId) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`خطا در لود ${path}`);
    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
  } catch (err) {
    console.log(` خطا در بارگذاری ${path}`, err);
  }
}
