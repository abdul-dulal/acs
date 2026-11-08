// Cached at build/revalidation time so the footer can stay prerendered.
export default async function Year() {
  "use cache";
  return new Date().getFullYear();
}
