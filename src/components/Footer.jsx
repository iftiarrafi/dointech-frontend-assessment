export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-auto border-t border-gray-800 text-sm">
      <p>© {new Date().getFullYear()} MyApp Inc. All rights reserved.</p>
    </footer>
  );
}