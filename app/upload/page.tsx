"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Camera, ArrowLeft, Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<any | null>(null)

  // Mock celebrity data
  const celebrityData = {
    name: "Emma Stone",
    profession: "Actress",
    age: 35,
    bio: "Emily Jean 'Emma' Stone is an American actress. She is the recipient of various accolades, including an Academy Award, a British Academy Film Award, and a Golden Globe Award.",
    knownFor: ["La La Land", "The Favourite", "Easy A", "Cruella"],
    awards: ["Academy Award for Best Actress", "Golden Globe Award", "BAFTA Award"],
    socialMedia: {
      instagram: "@emmastone",
      twitter: "@emmastone",
    },
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = (event) => {
        if (event.target) {
          setSelectedImage(event.target.result as string)
          analyzeImage()
        }
      }

      reader.readAsDataURL(file)
    }
  }

  const handleCameraCapture = () => {
    // For demo purposes, we'll just use a placeholder
    setSelectedImage("/placeholder.svg?height=400&width=400")
    analyzeImage()
  }

  const analyzeImage = () => {
    setIsAnalyzing(true)

    // Simulate API call with a timeout
    setTimeout(() => {
      setResult(celebrityData)
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
      <header className="container mx-auto py-6 flex items-center justify-between">
        <div className="text-sky-400 font-bold text-2xl">LOGO</div>
        <nav className="hidden md:flex space-x-10">
          <Link href="/" className="text-gray-500 font-medium">
            HOME
          </Link>
          <Link href="#products" className="text-gray-500 font-medium">
            PRODUCTS
          </Link>
          <Link href="#about" className="text-gray-500 font-medium">
            ABOUT
          </Link>
          <Link href="#contacts" className="text-gray-500 font-medium">
            CONTACTS
          </Link>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-slate-800">Celebrity Recognition</h1>
            <p className="text-sky-500">
              Upload a photo of an actor or actress and our AI will identify them and provide detailed information.
            </p>

            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upload">Upload Image</TabsTrigger>
                <TabsTrigger value="camera">Use Camera</TabsTrigger>
              </TabsList>
              <TabsContent value="upload" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Upload an Image</CardTitle>
                    <CardDescription>Select a clear photo of the celebrity you want to identify</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    {selectedImage ? (
                      <div className="relative w-full max-w-md aspect-square mb-4">
                        <Image
                          src={selectedImage || "/placeholder.svg"}
                          alt="Uploaded image"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-sky-200 rounded-lg p-12 w-full max-w-md flex flex-col items-center justify-center">
                        <Upload className="h-12 w-12 text-sky-300 mb-4" />
                        <p className="text-sm text-gray-500 text-center mb-4">
                          Drag and drop an image, or click to browse
                        </p>
                      </div>
                    )}
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button
                      onClick={() => document.getElementById("image-upload")?.click()}
                      className="bg-sky-400 hover:bg-sky-500"
                    >
                      Select Image
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="camera">
                <Card>
                  <CardHeader>
                    <CardTitle>Use Your Camera</CardTitle>
                    <CardDescription>Take a photo of the celebrity you want to identify</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    {selectedImage ? (
                      <div className="relative w-full max-w-md aspect-square mb-4">
                        <Image
                          src={selectedImage || "/placeholder.svg"}
                          alt="Captured image"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-sky-200 rounded-lg p-12 w-full max-w-md flex flex-col items-center justify-center">
                        <Camera className="h-12 w-12 text-sky-300 mb-4" />
                        <p className="text-sm text-gray-500 text-center mb-4">Click below to access your camera</p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button onClick={handleCameraCapture} className="bg-sky-400 hover:bg-sky-500">
                      Open Camera
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            {isAnalyzing ? (
              <Card className="w-full h-full flex flex-col items-center justify-center p-8">
                <div className="w-16 h-16 border-4 border-sky-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Analyzing Image</h3>
                <p className="text-gray-500 text-center">
                  Our AI is identifying the person and gathering information...
                </p>
              </Card>
            ) : result ? (
              <Card className="w-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={selectedImage || ""} />
                      <AvatarFallback>ES</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl">{result.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="bg-sky-50 text-sky-500">
                          {result.profession}
                        </Badge>
                        <span className="text-sm text-gray-500">{result.age} years old</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Biography</h3>
                    <p className="text-slate-700">{result.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Known For</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.knownFor.map((work: string, i: number) => (
                        <Badge key={i} variant="secondary" className="bg-slate-100">
                          {work}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Awards</h3>
                    <ul className="list-disc list-inside text-slate-700">
                      {result.awards.map((award: string, i: number) => (
                        <li key={i}>{award}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Social Media</h3>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Info size={14} />
                        {result.socialMedia.instagram}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Info size={14} />
                        {result.socialMedia.twitter}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => setResult(null)}>
                    Analyze Another Image
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card className="w-full h-full flex flex-col items-center justify-center p-8">
                <Info className="h-12 w-12 text-sky-300 mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">No Image Selected</h3>
                <p className="text-gray-500 text-center max-w-md">
                  Upload or capture an image of an actor or actress to see detailed information about them.
                </p>
              </Card>
            )}
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-8 mt-12 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">About Our Technology</h3>
            <p className="text-gray-500">
              Our advanced AI uses deep learning to recognize celebrities and provide accurate information about them.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Popular Searches</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Hollywood Actors</li>
              <li>Award Winners</li>
              <li>TV Series Stars</li>
              <li>Rising Talents</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Contact Us</h3>
            <p className="text-gray-500">
              Have questions or feedback? Reach out to our team at support@facerecognition.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          © 2025 Face Recognition. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

