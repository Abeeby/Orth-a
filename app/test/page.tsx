export default function TestPage() {
  return (
    <div className="min-h-screen bg-jade p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-porcelain mb-4">Test Tailwind CSS</h1>
        <div className="bg-porcelain p-6 rounded-lg shadow-lg">
          <p className="text-ink mb-4">Si vous voyez cette page avec :</p>
          <ul className="list-disc list-inside space-y-2 text-ink">
            <li>Un fond vert jade</li>
            <li>Ce texte dans une boîte beige clair (porcelain)</li>
            <li>Du texte noir (ink)</li>
          </ul>
          <p className="mt-4 text-gold font-semibold">Alors Tailwind fonctionne ! ✅</p>
          <div className="mt-6 flex gap-4">
            <div className="w-20 h-20 bg-jade rounded"></div>
            <div className="w-20 h-20 bg-gold rounded"></div>
            <div className="w-20 h-20 bg-tea-rose rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 