/**
 * This is a preview card to be used in expore/home page
 * TODO: Change the file name
 * Support: It takes []images and show the the first one as a thumbnail
 */

interface DocCardProps {
  slies?: any
  title?: string
  author?: string 
}

export const DocCard: React.FC<DocCardProps> = (props: DocCardProps) => {
  return (
    <div className="block relative group transition hover:scale-105 hover:-rotate-1 max-w-sm">
      <a href="#" target="_blank" className="block">
        <div className="aspect-w-2 aspect-h-1 rounded-2xl border shadow overflow-hidden bg-gray-100">
          <img
            src="explain.png"
            loading="lazy"
            className="object-center object-cover"
          />
        </div>

        <div className="p-2 space-y-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="flex-1 text-base font-medium text-gray-500">
              Here goes youe article title
            </h3>
          </div>
          <p className="text-sm text-gray-500">by Jeet</p>
        </div>
      </a>
    </div>
  );
};
