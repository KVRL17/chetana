"use client";
import { Phone, Mail, MapPin, Clock, Search, Menu, X, ChevronDown, ChevronRight, ChevronUp, ArrowRight, ExternalLink, Star, MessageCircle, Calendar, Users, User, Heart, BookOpen, GraduationCap, Briefcase, Brain, TrendingUp, Shield, Globe, Award, CheckCircle, Sparkles, Send, PhoneCall, MapPinned, Handshake, HeartHandshake, Baby, Compass, Target, Zap, BookMarked, PenTool, AlertCircle, Info, Check } from "lucide-react";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  phone: Phone, mail: Mail, "map-pin": MapPin, clock: Clock, search: Search,
  menu: Menu, close: X, "chevron-down": ChevronDown, "chevron-right": ChevronRight,
  "chevron-up": ChevronUp, "arrow-right": ArrowRight, "external-link": ExternalLink,
  star: Star, message: MessageCircle, calendar: Calendar, users: Users,
  user: User, heart: Heart, "book-open": BookOpen, "graduation-cap": GraduationCap,
  briefcase: Briefcase, brain: Brain, "trending-up": TrendingUp, shield: Shield,
  globe: Globe, award: Award, "check-circle": CheckCircle, sparkles: Sparkles,
  send: Send, "phone-call": PhoneCall, "map-pinned": MapPinned,
  handshake: Handshake, "heart-handshake": HeartHandshake, baby: Baby,
  compass: Compass, target: Target, zap: Zap, "book-marked": BookMarked,
  "pen-tool": PenTool, "alert-circle": AlertCircle, info: Info, check: Check,
};

export function Icon({ name, className, ...props }: { name: string; className?: string } & React.SVGProps<SVGSVGElement>) {
  const IconComponent = iconMap[name] || CheckCircle;
  return <IconComponent className={className} {...props} />;
}

export {
  Phone, Mail, MapPin, Clock, Search, Menu, X, ChevronDown, ChevronRight,
  ChevronUp, ArrowRight, ExternalLink, Star, MessageCircle, Calendar,
  Users, User, Heart, BookOpen, GraduationCap, Briefcase, Brain,
  TrendingUp, Shield, Globe, Award, CheckCircle, Sparkles, Send,
  PhoneCall, MapPinned, Handshake, HeartHandshake, Baby, Compass,
  Target, Zap, BookMarked, PenTool, AlertCircle, Info, Check,
};