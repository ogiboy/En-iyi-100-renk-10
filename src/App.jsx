import './styles.css'

import colorData from './data/colorData'
import Header from './components/Header'

export default function App() {
  /* Challenge

	Frontend Dergisi, okuyucularına front-end geliştirmedeki en iyi 100 rengi göstermenizi bekliyor. Göreviniz onları aşağıdaki gibi oluşturmak: 
	
		1. colorData dizisindeki 100 hex kodlu rengin her biri için aşağıda işaretli alanda bir ColorCard elementi bulunmalıdır. Renkler zaten sıralanmıştır, bu nedenle elementlerin sırası array'deki renklerin sırası ile eşleşmelidir. 
		   
		2. colorData bileşenindeki sabit kodlu bilgiler, prop'lar aracılığıyla aktarılan verilerle değiştirilmelidir. 
		   
		3. Bu görevleri doğru bir şekilde tamamlarsanız, "En İyi 100 Renk" başlığının altında 100 renk kartı görmelisiniz. Her renk, ilgili rengin sıra numarasını, hex kodunu ve gerçek rengin kendisini arka planda göstermelidir
		   
		Not: colorData dosyaya aktarılmıştır
*/

  function ColorCard(props) {
    const { colors } = props
    return (
      <>
        {/* <div className="color-card" style={{ background: '#34568B' }}>
          <p>
            <span>1.</span> #34568B
          </p>
        </div> */}
        {colors.map((data, index) => {
          return (
            <div
              className="color-card"
              style={{ backgroundColor: `${data}` }}
              key={index}
            >
              <p>
                <span>{index + 1}.</span> {data}
              </p>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div className="wrapper">
      <Header />

      {/*------ColorCard elementleriniz aşağıda-----------*/}

      <ColorCard colors={colorData} />

      {/*------ ColorCard elementleriniz yukarıda-----------*/}
    </div>
  )
}
