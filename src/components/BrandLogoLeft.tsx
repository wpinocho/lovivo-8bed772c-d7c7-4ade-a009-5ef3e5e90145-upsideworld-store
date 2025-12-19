export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      <img 
        src="/logo.svg" 
        alt="UpsideWorld"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold text-foreground neon-glow-red">UpsideWorld</span>';
        }}
      />
    </a>
  )
}