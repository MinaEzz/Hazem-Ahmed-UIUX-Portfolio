export default function ErrorText({ error }: { error?: string }) {
  return <p className="text-sm font-normal text-red-600 capitalize">{error}</p>;
}
