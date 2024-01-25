import JobFilderSidebar from "@/components/JobFilerSidebar";
import JobListItem from "@/components/JobListitem";
import prisma from "@/lib/prisma";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="max-w-5xl m-auto px-3 my-10 space-y-10">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Explorez l Avenir Numérique
        </h1>
        <p className="text-muted-foreground">Trouvez Votre Emploi de Développeur Idéal</p>
      </div>
      <section className="flex flex-col md:flex-row gap-4">
        <JobFilderSidebar />
        <div className="grow space-y-4 ">
          {jobs.map((job) => (
            <JobListItem job={job} key={job.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
