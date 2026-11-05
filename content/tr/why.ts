// PAKET-P6 A1: TR sözlüğü (why). Tip ve dilden bağımsız sabitler: content/why.ts.
import type { WhyContent } from '../why';

export const why: WhyContent = {
    eyebrow: 'NEDEN DOVEIFY',
    figure: '%100', // PAKET-P7 G8 (Emre kararı); EN: 100% / OWNERSHIP
    figureLabel: 'SAHİPLİK',
    items: [
        { title: '%100 Sahiplik', description: 'Kod, veri ve altyapı sizin mülkünüzdür; kiralamazsınız. Tüm veri müşteride kalır.' },
        { title: 'Uzun Vadeli Değer', description: 'Abonelik değil yatırım; sistem büyüdükçe değeri artar.' },
        { title: 'Sektöre Özel Çözümler', description: 'Genel platform değil, iş akışınıza göre kurulmuş sistemler.' },
        {
            title: 'Veri Egemenliği',
            description: 'Tüm veriniz kendi altyapınızda, kendi mülkünüzde; üçüncü taraf erişimi yok, kontrol her zaman sizde.'
        },
        { title: 'Uzun Vadeli Çözüm Ortaklığı', description: 'Teslimle bitmez; birlikte büyütürüz.' }
    ]
};
