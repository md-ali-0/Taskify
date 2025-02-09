import ProfileForm from "@/components/profile/profile-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile",
    description: "Manage your profile settings",
};

export default function ProfilePage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
            <ProfileForm />
        </div>
    );
}
