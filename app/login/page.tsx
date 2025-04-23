
"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import dynamic from 'next/dynamic';

// Import LeafScene with no SSR to avoid hydration issues
const LeafScene = dynamic(
  () => import('@/components/three/LeafScene'),
  { ssr: false }
);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <LeafScene />
      <div className="absolute top-6 left-6 z-10">
        <img
          src="/lovable-uploads/d07e0a90-7060-4a20-a861-24c1b507ed99.png"
          alt="GreenThicks Logo"
          className="h-16 md:h-20"
        />
      </div>
      <div className="w-full max-w-md relative z-10">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-greenthicks-light/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-greenthicks-dark/20 rounded-full blur-3xl" />
        <Card className="border-greenthicks-light/20 overflow-hidden bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-2 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight">Welcome Back</h1>
              <p className="text-sm text-muted-foreground">
                Sign in to access your GreenThicks account
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Mail size={18} />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 bg-white/50 focus:bg-white/80 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Lock size={18} />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 bg-white/50 focus:bg-white/80 transition-colors"
                />
                <div
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-gradient-to-r from-greenthicks-dark to-greenthicks hover:from-greenthicks hover:to-greenthicks-light transition-all duration-300 border-none">
              Sign In
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary font-medium hover:underline">
                Create one
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
