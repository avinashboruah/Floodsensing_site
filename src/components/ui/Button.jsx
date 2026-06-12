const variants = {
  primary:
    'bg-pacific text-white border-transparent hover:bg-pacific-dark hover:-translate-y-px',
  ghost:
    'bg-transparent text-white/80 border border-white/20 hover:border-pacific hover:text-pacific',
  white: 'bg-white text-carbon border-transparent font-bold hover:-translate-y-0.5',
  'outline-white':
    'bg-transparent text-white/80 border border-white/50 hover:border-pacific hover:text-pacific',
  submit: 'bg-white text-carbon border-transparent font-bold w-full hover:-translate-y-0.5',
};

export default function Button({ variant = 'primary', className = '', children, ...rest }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold cursor-pointer transition-all duration-200 min-h-[44px] touch-manipulation border ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
