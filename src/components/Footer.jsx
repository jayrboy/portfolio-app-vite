const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-5">
      <div className="align-element items-center">
        <p className="text-white mt-8 leading-loose text-center">
          copyright &copy; web portfolio&nbsp;
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </div>
    </footer>
  )
}
export default Footer
