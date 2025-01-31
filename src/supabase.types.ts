export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      professorlist: {
        Row: {
          "courses/0": string | null
          "courses/1": string | null
          "courses/10": string | null
          "courses/11": string | null
          "courses/12": string | null
          "courses/13": string | null
          "courses/14": string | null
          "courses/15": string | null
          "courses/16": string | null
          "courses/17": string | null
          "courses/18": string | null
          "courses/19": string | null
          "courses/2": string | null
          "courses/20": string | null
          "courses/21": string | null
          "courses/22": string | null
          "courses/23": string | null
          "courses/24": string | null
          "courses/25": string | null
          "courses/26": string | null
          "courses/27": string | null
          "courses/28": string | null
          "courses/29": string | null
          "courses/3": string | null
          "courses/30": string | null
          "courses/31": string | null
          "courses/32": string | null
          "courses/33": string | null
          "courses/34": string | null
          "courses/35": string | null
          "courses/36": string | null
          "courses/37": string | null
          "courses/38": string | null
          "courses/39": string | null
          "courses/4": string | null
          "courses/40": string | null
          "courses/5": string | null
          "courses/6": string | null
          "courses/7": string | null
          "courses/8": string | null
          "courses/9": string | null
          department: string | null
          firstName: string | null
          id: string | null
          lastName: string | null
          materialClear: number | null
          numEvals: number | null
          overallRating: number | null
          studentDifficulties: number | null
          "tags/Class Handouts": string | null
          "tags/Does Not Use Canvas": string | null
          "tags/Fast Response Time": string | null
          "tags/Flexible Attendance Policy": string | null
          "tags/Flexible Deadline Policy": string | null
          "tags/Flexible Grading Policy": string | null
          "tags/High In-Person Availability": string | null
          "tags/Honor DRC Accommodations": string | null
          "tags/Hybrid Option": string | null
          "tags/Inflexible Attendance Policy": string | null
          "tags/Inflexible Deadline Policy": string | null
          "tags/Inflexible Grading Policy": string | null
          "tags/No Breaks During Lecture": string | null
          "tags/Pop Quizzes": string | null
          "tags/Recorded Lectures": string | null
          "tags/Supplemental Study Material": string | null
          "tags/Uploads Slides": string | null
          "tags/Zoom Office Hours": string | null
        }
        Insert: {
          "courses/0"?: string | null
          "courses/1"?: string | null
          "courses/10"?: string | null
          "courses/11"?: string | null
          "courses/12"?: string | null
          "courses/13"?: string | null
          "courses/14"?: string | null
          "courses/15"?: string | null
          "courses/16"?: string | null
          "courses/17"?: string | null
          "courses/18"?: string | null
          "courses/19"?: string | null
          "courses/2"?: string | null
          "courses/20"?: string | null
          "courses/21"?: string | null
          "courses/22"?: string | null
          "courses/23"?: string | null
          "courses/24"?: string | null
          "courses/25"?: string | null
          "courses/26"?: string | null
          "courses/27"?: string | null
          "courses/28"?: string | null
          "courses/29"?: string | null
          "courses/3"?: string | null
          "courses/30"?: string | null
          "courses/31"?: string | null
          "courses/32"?: string | null
          "courses/33"?: string | null
          "courses/34"?: string | null
          "courses/35"?: string | null
          "courses/36"?: string | null
          "courses/37"?: string | null
          "courses/38"?: string | null
          "courses/39"?: string | null
          "courses/4"?: string | null
          "courses/40"?: string | null
          "courses/5"?: string | null
          "courses/6"?: string | null
          "courses/7"?: string | null
          "courses/8"?: string | null
          "courses/9"?: string | null
          department?: string | null
          firstName?: string | null
          id?: string | null
          lastName?: string | null
          materialClear?: number | null
          numEvals?: number | null
          overallRating?: number | null
          studentDifficulties?: number | null
          "tags/Class Handouts"?: string | null
          "tags/Does Not Use Canvas"?: string | null
          "tags/Fast Response Time"?: string | null
          "tags/Flexible Attendance Policy"?: string | null
          "tags/Flexible Deadline Policy"?: string | null
          "tags/Flexible Grading Policy"?: string | null
          "tags/High In-Person Availability"?: string | null
          "tags/Honor DRC Accommodations"?: string | null
          "tags/Hybrid Option"?: string | null
          "tags/Inflexible Attendance Policy"?: string | null
          "tags/Inflexible Deadline Policy"?: string | null
          "tags/Inflexible Grading Policy"?: string | null
          "tags/No Breaks During Lecture"?: string | null
          "tags/Pop Quizzes"?: string | null
          "tags/Recorded Lectures"?: string | null
          "tags/Supplemental Study Material"?: string | null
          "tags/Uploads Slides"?: string | null
          "tags/Zoom Office Hours"?: string | null
        }
        Update: {
          "courses/0"?: string | null
          "courses/1"?: string | null
          "courses/10"?: string | null
          "courses/11"?: string | null
          "courses/12"?: string | null
          "courses/13"?: string | null
          "courses/14"?: string | null
          "courses/15"?: string | null
          "courses/16"?: string | null
          "courses/17"?: string | null
          "courses/18"?: string | null
          "courses/19"?: string | null
          "courses/2"?: string | null
          "courses/20"?: string | null
          "courses/21"?: string | null
          "courses/22"?: string | null
          "courses/23"?: string | null
          "courses/24"?: string | null
          "courses/25"?: string | null
          "courses/26"?: string | null
          "courses/27"?: string | null
          "courses/28"?: string | null
          "courses/29"?: string | null
          "courses/3"?: string | null
          "courses/30"?: string | null
          "courses/31"?: string | null
          "courses/32"?: string | null
          "courses/33"?: string | null
          "courses/34"?: string | null
          "courses/35"?: string | null
          "courses/36"?: string | null
          "courses/37"?: string | null
          "courses/38"?: string | null
          "courses/39"?: string | null
          "courses/4"?: string | null
          "courses/40"?: string | null
          "courses/5"?: string | null
          "courses/6"?: string | null
          "courses/7"?: string | null
          "courses/8"?: string | null
          "courses/9"?: string | null
          department?: string | null
          firstName?: string | null
          id?: string | null
          lastName?: string | null
          materialClear?: number | null
          numEvals?: number | null
          overallRating?: number | null
          studentDifficulties?: number | null
          "tags/Class Handouts"?: string | null
          "tags/Does Not Use Canvas"?: string | null
          "tags/Fast Response Time"?: string | null
          "tags/Flexible Attendance Policy"?: string | null
          "tags/Flexible Deadline Policy"?: string | null
          "tags/Flexible Grading Policy"?: string | null
          "tags/High In-Person Availability"?: string | null
          "tags/Honor DRC Accommodations"?: string | null
          "tags/Hybrid Option"?: string | null
          "tags/Inflexible Attendance Policy"?: string | null
          "tags/Inflexible Deadline Policy"?: string | null
          "tags/Inflexible Grading Policy"?: string | null
          "tags/No Breaks During Lecture"?: string | null
          "tags/Pop Quizzes"?: string | null
          "tags/Recorded Lectures"?: string | null
          "tags/Supplemental Study Material"?: string | null
          "tags/Uploads Slides"?: string | null
          "tags/Zoom Office Hours"?: string | null
        }
        Relationships: []
      }
      SuggestedProfessors: {
        Row: {
          "courses/1": string | null
          "courses/2": string | null
          "courses/3": string | null
          created_at: string
          department: string | null
          Email: string | null
          firstName: string | null
          id: number
          lastName: string | null
        }
        Insert: {
          "courses/1"?: string | null
          "courses/2"?: string | null
          "courses/3"?: string | null
          created_at?: string
          department?: string | null
          Email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
        }
        Update: {
          "courses/1"?: string | null
          "courses/2"?: string | null
          "courses/3"?: string | null
          created_at?: string
          department?: string | null
          Email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
