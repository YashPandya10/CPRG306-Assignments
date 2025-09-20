import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h2>Yash Pandya</h2>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/YashPandya10/CPRG306-Assignments.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my repository
        </Link>
      </p>
    </div>
  );
}
