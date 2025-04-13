

// The component will fill the height/width of its parent container. Edit the CSS to change this.
// The options below are the default values.
import AutoScrollCards from '@/components/AutoScrollCards';


export default function Maintainence() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-black dark:to-gray-900 flex items-center justify-center">
      <AutoScrollCards />
    </main>
  );
}