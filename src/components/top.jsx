function Top() {
  return (
    <div className="totop">
      <span className="button" data-totop onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
      }}>Naar boven</span>
    </div>
  )
}

export default Top