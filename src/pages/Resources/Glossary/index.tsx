const Glossary = () => {
  return (
    <section className=" space-y-4 md:space-y-8">
      <div className="mt-10 h-72 max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-12 py-2 sm:py-4 md:py-8 bg-tertiary text-center flex flex-col items-center justify-center font-bold text-5xl">
        <h1>Caregiver Registry Glossary</h1>
      </div>
      <div className="py-8 w-4/5 mx-auto space-y-8">
        <h2 className="font-bold text-3xl text-primary">
          Essential Caregiver Registry Terms
        </h2>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">Caregiver Registry</h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              A <span>caregiver</span> registry matches caregivers (on a 1099
              basis) with clients and families looking for care.
            </li>
          </ul>
        </div>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">Claims Reporting</h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              Caregiver registries can use claims reporting to inform
              decision-making and optimize their business.
            </li>
          </ul>
        </div>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">Compliance</h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              Caregiver registries have to maintain compliance in order to
              operate their businesses. There are less regulations than home
              care agencies.
            </li>
          </ul>
        </div>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">Department of Labor (DOL) Audit</h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              The Department of Labor conducts audits on a regular basis. The
              home care industry, in particular, is under a magnifying glass for
              violations of FLSA.
            </li>
          </ul>
        </div>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">
            Electronic Visit Verification (EVV)
          </h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              EVV or electronic visit verification is the system that businesses
              or individuals use to verify that a caregiver clocked in on time
              and completed tasks with a client.
            </li>
          </ul>
        </div>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">Family Room</h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              Clients who utilize a caregiver registry can use a family room or
              client portal for seamless communications with their caregiver,
              pay invoices, and approve shifts as they’re completed.
            </li>
          </ul>
        </div>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">Home care agency</h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              Home-based care businesses that employee W2 caregivers and
              schedule them to work with clients of their own.
            </li>
          </ul>
        </div>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">
            Registry Management System (or Software)
          </h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              A registry management system or software is the system that
              caregiver registries use to operate their businesses.
            </li>
          </ul>
        </div>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">Revenue Cycle Management</h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              Revenue cycle management (RCM) is the financial process a business
              uses to manage billing, payment, and reimbursement from a
              financial and administrative perspective.
            </li>
          </ul>
        </div>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">Scheduling</h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              Caregiver registries do not maintain schedules for their clients
              or caregivers, but the functionality is important to have for
              families and caregivers to maintain separately.
            </li>
          </ul>
        </div>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">Third-Party Payment Processing</h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              Paying caregivers directly and writing the registry business name
              on a check can put the business at-risk for worker classification
              issues. Third-party payment processing platforms like Ally can
              assist in maintaining a clean business with a lower audit risk.
            </li>
          </ul>
        </div>
        <div className="text-zinc-800 space-y-2">
          <h4 className="font-extrabold">Worker Classification</h4>
          <ul className="pl-4">
            <li className="text-sm list-disc marker:text-primary font-semibold">
              Caregiver registries traditionally operate with 1099,
              independently contracted caregivers. Maintaining separation
              between caregivers and the business is crucial for worker
              classification, as well as aspects like worker control, ability to
              profit, expenses, and more.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Glossary;
