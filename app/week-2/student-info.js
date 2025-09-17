import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h2>Student Information</h2>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/yashpandya/cprg306-assignments"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my repository
        </Link>
      </p>
    </div>
  );
}
