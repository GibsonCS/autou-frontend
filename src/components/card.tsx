type CardProps = {
  content: any[] | null;
};

export default function Card(props: CardProps) {
  return (
    <div className="divide-y text-gray-300 divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
      <div className="px-4 py-5 sm:px-6">
        {props.content && props.content[0]}
      </div>
      <div className="px-4 py-5 sm:p-6">
        {props.content && props.content[1]}
      </div>
    </div>
  );
}
