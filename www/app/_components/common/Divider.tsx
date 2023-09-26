const base = "relative h-16 w-full mt-32 container mx-auto";
const variants = {
  flip: `${base} rotate-180`,
};
export default function Divider({ flip }: { flip?: boolean }) {
  let classes = base;
  if (flip) {
    classes = variants.flip;
  }
  return (
    <div className={classes}>
      <div className="absolute top-0 left-0 right-0, bottom-0 bgDivider h-16"></div>
      <div className="absolute top-0 left-30 right-30 bottom-[40px] bg-divider-glow w-full"></div>
    </div>
  );
}